import os
from astrapy import DataAPIClient
from astrapy.constants import VectorMetric
from astrapy.ids import UUID
from astrapy.exceptions import InsertManyException
from astrapy.info import CollectionVectorServiceOptions

# Initialize the client and get a "Database" object
client = DataAPIClient("AstraCS:CZGTeXFkgkJuBPSwdKyRZPvJ:30e2af56f3dc3490ae1a3d298ded9f5bc4800c3af273fc1e2d9c7e6fb2924cfb")
database = client.get_database("https://1d951f52-9293-40f6-b533-50e8b95f22ff-us-east-2.apps.astra.datastax.com")
print(f"* Database: {database.info().name}\n")

# Use an existing collection or create one if needed
try:
    collection = database.get_collection("vector_test")
    print(f"* Collection: {collection.full_name}\n")
except Exception as e:
    print(f"Failed to get collection: {str(e)}")
    # Uncomment the following code if you need to create the collection
    # collection = database.create_collection(
    #     "openai",
    #     metric=VectorMetric.COSINE,
    #     service=CollectionVectorServiceOptions(
    #         provider="openai",
    #         model_name="text-embedding-3-large",
    #         authentication={
    #             "providerKey": "fintech",
    #         },
    #         parameters={
    #             "organizationId": "",
    #             "projectId": "",
    #         },
    #     ),
    # )
    # print(f"* Collection: {collection.full_name}\n")
