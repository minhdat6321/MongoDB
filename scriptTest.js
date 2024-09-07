{
  "client": "Thunder Client",
    "collectionName": "express-mongo-template",
      "dateExported": "2022-07-11T13:58:43.155Z",
        "version": "1.1",
          "folders": [
            {
              "_id": "db207d21-c592-477e-a99e-6b870fcbf1d9",
              "name": "foo",
              "containerId": "",
              "created": "2022-07-11T13:22:53.970Z",
              "sortNum": 10000
            }
          ],
            "requests": [
              {
                "_id": "c42a929f-89c2-41d0-87eb-022801b99de0",
                "colId": "08488ecf-e54f-43d5-8378-b88420668f47",
                "containerId": "",
                "name": "not found",
                "url": "http://localhost:8000/notfound",
                "method": "GET",
                "sortNum": 10000,
                "created": "2022-07-07T05:09:27.743Z",
                "modified": "2022-07-07T05:09:43.526Z",
                "headers": [],
                "params": [],
                "tests": []
              },
              {
                "_id": "dd682f2f-6849-46b0-bab1-9f8b115e5b9d",
                "colId": "08488ecf-e54f-43d5-8378-b88420668f47",
                "containerId": "",
                "name": "index success",
                "url": "http://localhost:8000/",
                "method": "GET",
                "sortNum": 15000,
                "created": "2022-07-07T05:10:46.675Z",
                "modified": "2022-07-07T05:10:52.367Z",
                "headers": [],
                "params": [],
                "tests": []
              },
              {
                "_id": "af6d49c3-7d42-4f15-95a1-af4041f3516a",
                "colId": "08488ecf-e54f-43d5-8378-b88420668f47",
                "containerId": "",
                "name": "template",
                "url": "http://localhost:8000/template/any",
                "method": "GET",
                "sortNum": 20000,
                "created": "2022-07-07T05:09:52.439Z",
                "modified": "2022-07-11T13:22:23.962Z",
                "headers": [],
                "params": [],
                "tests": []
              },
              {
                "_id": "56a58f15-15d0-4f89-a715-21a7a686b74d",
                "colId": "08488ecf-e54f-43d5-8378-b88420668f47",
                "containerId": "",
                "name": "template error",
                "url": "http://localhost:8000/template/error",
                "method": "GET",
                "sortNum": 30000,
                "created": "2022-07-07T05:10:06.695Z",
                "modified": "2022-07-11T13:22:28.251Z",
                "headers": [],
                "params": [],
                "tests": []
              },
              {
                "_id": "c061fae3-0ec5-44b5-8ce3-6191d0a6289c",
                "colId": "08488ecf-e54f-43d5-8378-b88420668f47",
                "containerId": "db207d21-c592-477e-a99e-6b870fcbf1d9",
                "name": "Get list of foos",
                "url": "http://localhost:8000/foo",
                "method": "GET",
                "sortNum": 40000,
                "created": "2022-07-11T13:23:04.861Z",
                "modified": "2022-07-11T13:23:23.696Z",
                "headers": [],
                "params": [],
                "tests": []
              },
              {
                "_id": "ac782e40-bb09-4f0c-b406-73dff255a8a8",
                "colId": "08488ecf-e54f-43d5-8378-b88420668f47",
                "containerId": "db207d21-c592-477e-a99e-6b870fcbf1d9",
                "name": "create a foo",
                "url": "http://localhost:8000/foo",
                "method": "POST",
                "sortNum": 50000,
                "created": "2022-07-11T13:23:28.488Z",
                "modified": "2022-07-11T13:24:13.754Z",
                "headers": [],
                "params": [],
                "body": {
                  "type": "json",
                  "raw": "{\n    \"name\":\"info\",\n    \"flag\": true\n}",
                  "form": []
                },
                "tests": []
              },
              {
                "_id": "7782afcb-ad3f-412e-a0bd-25b8b42d6e7d",
                "colId": "08488ecf-e54f-43d5-8378-b88420668f47",
                "containerId": "db207d21-c592-477e-a99e-6b870fcbf1d9",
                "name": "Update a foo by id",
                "url": "http://localhost:8000/foo/62cc2ac60dd407751c1e45e6",
                "method": "PUT",
                "sortNum": 60000,
                "created": "2022-07-11T13:23:30.169Z",
                "modified": "2022-07-11T13:52:44.889Z",
                "headers": [],
                "params": [],
                "body": {
                  "type": "json",
                  "raw": "{\n    \"flag\":false\n}",
                  "form": []
                },
                "tests": []
              },
              {
                "_id": "4f4f1086-6496-466e-840b-6210e7e613e4",
                "colId": "08488ecf-e54f-43d5-8378-b88420668f47",
                "containerId": "db207d21-c592-477e-a99e-6b870fcbf1d9",
                "name": "Delete a foo by id",
                "url": "http://localhost:8000/foo/null",
                "method": "DELETE",
                "sortNum": 70000,
                "created": "2022-07-11T13:23:31.862Z",
                "modified": "2022-07-11T13:53:38.205Z",
                "headers": [],
                "params": [],
                "tests": []
              }
            ]
}