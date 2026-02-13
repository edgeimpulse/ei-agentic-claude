Testing
api key -  ei_05febb65941ef91246bb92697a6cb6d9ff37ebb60b0ad8013d719919ef777fac

project - 888999


this organization is only for mcp testing so do all tests on it https://studio.edgeimpulse.com/studio/888999/impulse/1/learning/anomaly-gmm/16

https://studio.edgeimpulse.com/organization/398945

org api key - ei_9eb88cff4b3c31518e74e2137cdab58cf8465c376efafdc4



---
title: "Ingestion API"
---

The Ingestion API is used to send new device data to Edge Impulse. It's available on both HTTP and HTTPS endpoints and requires an API key to authenticate.

The API is available at:

```
http://ingestion.edgeimpulse.com
```

```
https://ingestion.edgeimpulse.com
```

## Supported file types

With the Ingestion API, you can upload the following types of files:

| Data type | Extension| Acquisition format | Annotation formats |
| --------- | ---- | ------ | ----- |
| Sensor | `.json`, `.cbor` | [JSON CBOR](/tools/specifications/data-acquisition/json-cbor) | [labels](/tools/specifications/data-annotation/ei-labels), [structured labels](/tools/specifications/data-annotation/ei-structured-labels) |
| Sensor | `.csv` | [CSV](/tools/specifications/data-acquisition/csv) | [labels](/tools/specifications/data-annotation/ei-labels), [structured labels](/tools/specifications/data-annotation/ei-structured-labels) |
| Audio | `.wav` | - | [labels](/tools/specifications/data-annotation/ei-labels), [structured labels](/tools/specifications/data-annotation/ei-structured-labels) |
| Image | `.jpg`, `.png` | - | [labels](/tools/specifications/data-annotation/ei-labels), [object detection](/tools/specifications/data-annotation/object-detection) |
| Video* | `.mp4`, `.avi` | - | [labels](/tools/specifications/data-annotation/ei-labels) |
| Labels | `.labels` | - | [labels](/tools/specifications/data-annotation/ei-labels), [structured labels](/tools/specifications/data-annotation/ei-structured-labels), [object detection](/tools/specifications/data-annotation/object-detection#edge-impulse-object-detection-format) |

_*Video files can be split into individual frames after uploading to Studio._

## Endpoints

### Files endpoint

There are three endpoints available:

* `POST /api/training/files` - for gathering training data.
* `POST /api/testing/files` - for gathering testing data. If you have the 'Live classification' page open in your browser the file will automatically be classified against the current impulse.
* `POST /api/anomaly/files` - for anomaly data from deployed devices.

The maximum number of files you can upload in a single request is 1000.
The maximum size of a single file is 100 MB.

The minimal request to the `api/training/files` endpoint is the following:

```
POST https://ingestion.edgeimpulse.com/api/training/files
X-Api-Key: ei_6040df080906d06f090e05013b7090580b707a0b050eb04d00350504070a2040
Content-Length: 442
Content-Type: multipart/form-data; boundary=999e13bfdfc8bcc05b97f4784410806e

b'--999e13bfdfc8bcc05b97f4784410806e\r\nContent-Disposition: form-data; name="data"; filename="test.cbor"\r\nContent-Type: application/cbor\r\n\r\n\xa3gpayload\xa5kdevice_nameq11:22:33:44:55:66kdevice_typelNORDIC_NRF91kinterval_ms\xfb@4\x00\x00\x00\x00\x00\x00gsensors\x83\xa2dnamedaccXeunitsdm/s2\xa2dnamedaccYeunitsdm/s2\xa2dnamedaccZeunitsdm/s2fvalues\x82\x83\xfb?\xc4\xd3\xb6\xc0\x00\x00\x00\xfb\xbf\xe9\xbaE\x00\x00\x00\x00\xfb@#\xa8\xd0`\x00\x00\x00\x83\xfb?\xb1&\xd8\xc0\x00\x00\x00\xfb\xbf\xe8\xcf\x0b`\x00\x00\x00\xfb@#\xd0\x04\xa0\x00\x00\x00iprotected\xa2calgdnonecverbv1isignatureb00\r\n--999e13bfdfc8bcc05b97f4784410806e--\r\n'
```

The request body is presented using Python notation for binary strings for readability purposes. Normally it is a stream of bytes.

### Data endpoint (legacy)

Because the `files` endpoints expect `Content-Type` to be `multipart/form-data`, there are also available legacy endpoints that require simpler requests:

* `POST /api/training/data`
* `POST /api/testing/data`
* `POST /api/anomaly/data`

The minimal request to the `api/training/data` endpoint is the following:

```
POST https://ingestion.edgeimpulse.com/api/training/data
X-Api-Key: ei_6040df080906d06f090e05013b7090580b707a0b050eb04d00350504070a2040
X-File-Name: test.cbor
Content-Type: application/cbor
Content-Length: 265

b'\xa3gpayload\xa5kdevice_nameq11:22:33:44:55:66kdevice_typelNORDIC_NRF91kinterval_ms\xfb@4\x00\x00\x00\x00\x00\x00gsensors\x83\xa2dnamedaccXeunitsdm/s2\xa2dnamedaccYeunitsdm/s2\xa2dnamedaccZeunitsdm/s2fvalues\x82\x83\xfb?\xc4\xd3\xb6\xc0\x00\x00\x00\xfb\xbf\xe9\xbaE\x00\x00\x00\x00\xfb@#\xa8\xd0`\x00\x00\x00\x83\xfb?\xb1&\xd8\xc0\x00\x00\x00\xfb\xbf\xe8\xcf\x0b`\x00\x00\x00\xfb@#\xd0\x04\xa0\x00\x00\x00iprotected\xa2calgdnonecverbv1isignatureb00'
```

The request body is presented using Python notation for binary strings for readability purposes. Normally it is a stream of bytes.

### Header Parameters

* `x-api-key` - API Key (required).
* `x-label` - Label (optional). If this header is not provided a label is automatically inferred from the filename through the following regex: `^[a-zA-Z0-9\s-_]+` - For example: idle.01 will yield the label idle. If you don't want to assign the label nor derive it from the file name, provide an `x-no-label` header with the value `1`.
* `x-disallow-duplicates` - When set, the server checks the hash of the message against your current dataset (optional). We'd recommend setting this header but haven't enabled it by default for backward compatibility.
* `x-add-date-id`: 1 - to add a date ID to the filename. For example: if you upload with filename test.wav the file name will be test - set this option and we'll add a unique ID to the end (this is what we use on the daemon to create unique names).
* `Content-type` - format of data used. Can be `application/cbor`, `application/json`, `multipart/form-data`.

### Responses

All responses are sent with content type `text/plain`. The following response codes may be returned:

* `200` - Stored the file, file name is in the body.
* `400` - Invalid message, e.g. fields are missing, or are invalid. See body for more information.
* `401` - Missing `x-api-key` header, or invalid API key.
* `421` - Missing header, see body for more information.
* `500` - Internal server error, see body for more information.

## Examples

<CodeGroup>

```bash curl
curl -X POST \
     -H "x-api-key: ei_238fae..." \
     -H "x-label: car" \
     -H "Content-Type: multipart/form-data" \
     -F "data=@one.png" \
     -F "data=@two.png" \
     https://ingestion.edgeimpulse.com/api/training/files
```

```python python
# Install requests via: `pip3 install requests`
import requests
import os

api_key = 'ei_121...'
# Add the files you want to upload to Edge Impulse
files = [
    'one.png',
    'two.png',
]
# # Replace the label with your own.
label = 'car'
# Upload the file to Edge Impulse using the API, and print the response.
res = requests.post(url='https://ingestion.edgeimpulse.com/api/training/files',
                    headers={
                        'x-label': label,
                        'x-api-key': api_key,
                    },
                    # Creating the data payload for the request.
                    files=(('data', (os.path.basename(i), open(
                        i, 'rb'), 'image/png')) for i in files)
                    )

if (res.status_code == 200):
    print('Uploaded file(s) to Edge Impulse\n', res.status_code, res.content)
else:
    print('Failed to upload file(s) to Edge Impulse\n',
          res.status_code, res.content)
```

```javascript javascript
import fetch, { FormData, fileFromSync } from 'node-fetch';

const form = new FormData();
form.append('data', fileFromSync('one.png'));
form.append('data', fileFromSync('two.png'));

fetch('https://ingestion.edgeimpulse.com/api/training/files', {
    method: 'POST',
    headers: {
        'x-api-key': 'ei_238fae...',
        'x-label': 'car',
        'Content-Type': 'multipart/form-data'
    },
    body: form
});
```

</CodeGroup>

### Raw requests

On the embedded devices, usually, there are no high-level libraries available to perform HTTP requests. In this case, you can use the following example to prepare an HTTP request to the Ingestion API:

The ingestion service accepts raw requests with data formatted as JSON or CBOR. We will use the following JSON structure as an example sample:

```json
{
    "payload": {
        "device_name": "11:22:33:44:55:66",
        "device_type": "NORDIC_NRF91",
        "interval_ms": 20.0,
        "sensors": [
            {
                "name": "accX",
                "units": "m/s2"
            },
            {
                "name": "accY",
                "units": "m/s2"
            },
            {
                "name": "accZ",
                "units": "m/s2"
            }
        ],
        "values": [
            [
                0.1627109944820404,
                -0.803987979888916,
                9.82971477508545
            ],
            [
                0.06699900329113007,
                -0.7752739787101746,
                9.906285285949707
            ]
        ]
    },
    "protected": {
        "alg": "none",
        "ver": "v1"
    },
    "signature": "00"
}
```


---
title: "Studio API"
---

The Edge Impulse API exposes programmatic access to most functionality in the studio. You can use the API to edit the labels of many samples at once, train models, or create new impulses. In addition, you can subscribe to events, such as when a new file was processed by the ingestion service. You authenticate with the API using an API Key or with a username/password, see [API Authentication Types](/apis/studio#api-authentication-types).

The API is available at:

```
https://studio.edgeimpulse.com/v1
```

The API is described in [OpenAPI format](https://swagger.io/specification/), which can be used to generate clients in many languages. The OpenAPI definition file is located [here](https://studio.edgeimpulse.com/openapi.yml).

## API authentication types

<table><thead><tr><th width="283">Security Scheme</th><th width="106">Type</th><th width="118">Input</th><th>Name</th></tr></thead><tbody><tr><td>ApiKeyAuthentication</td><td>apiKey</td><td>header</td><td><code>x-api-key</code></td></tr><tr><td>JWTAuthentication</td><td>apiKey</td><td>cookie</td><td><code>jwt</code></td></tr><tr><td>JWTHttpHeaderAuthentication</td><td>apiKey</td><td>header</td><td><code>x-jwt-token</code></td></tr></tbody></table>

### API key

An Edge Impulse API key can be obtained through your Edge Impulse Studio project's dashboard. At the top of the page, click on the **Keys** button to see your project's available API keys, and to generate new keys.

<Frame caption="Edge Impulse project API keys">
  <img src="/.assets/images/api-keys.png" />
</Frame>

### JWT token

A JWT token can be acquired via the Edge Impulse API [Get JWT token](/apis/studio/login/get-jwt-token) request with your Edge Impulse username and password.

**Example**

```bash
curl --request POST \
--url https://studio.edgeimpulse.com/v1/api-login \
--header 'content-type: application/json' \
--data-raw '{"username": "edge-user-01", "password": "reprehenderit ea"}'
```

## Test API requests

If you want to test your API requests directly from this documentation, you can use the provided widget:

<Frame caption="Test API request">
  <img src="/.assets/images/api-test-request.png" />
</Frame>

And set your `x-api-key` or `x-jwt-token` header or your `jwt` cookie:

<Frame caption="Set authorization header">
  <img src="/.assets/images/api-set-authorization.png" />
</Frame>

## Jobs

Jobs are long-running tasks that are executed asynchronously. Jobs are identified by their job ID, in the form of `job-1569583053767`, which is returned when starting a job. Subsequent job updates are published over the WebSocket API.

<Info>
  Jobs started through the API are subject to the same usage limits (such as compute time used) as through the studio UI.
</Info>

### Updates

There are two events that are published regarding jobs:

- `job-data-{jobId}` - status update on the job, e.g. progress when training a neural network. Provides a single argument: `{ data: 'string with status' }`.
- `job-finished-{jobId}` - indicator that the job finished. Provides a single argument: `{ success: true }` which indicates whether the job was executed successfully.

### Canceling a job

You can also cancel a job through the websocket by sending a `job-cancel` event. Pass in one parameter (the job ID).

---
title: "Remote Management API"
---

The Remote Management API is used to allow devices to connect to Edge Impulse Studio. It is a part of the remote management service. For more information, please refer to the [WebSocket](/tools/protocols/remote-management/websocket) protocol documentation.

## Additional resources

- [Remote management service WebSocket protocol](/tools/protocols/remote-management/websocket)
