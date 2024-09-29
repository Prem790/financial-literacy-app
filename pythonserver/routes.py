from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from db import collection

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/users/register")
async def submit_form(request: Request):
    try:
        payload = await request.json()
        user_data = payload.get('data', [])
        if not user_data:
            return {"status": "error", "message": "No user data provided"}

        for user in user_data:
            print(user)  # Print each user's data

            # Insert data into the collection
            collection.insert_one({
                "_id": user["email"],  # Assuming email is unique
                "name": user["name"],
                "age": user["age"],
                "occupation": user["occupation"],
                "salary": user["salary"],
                "monthlyInvestment": user["monthlyInvestment"],
                "investmentType": user["investmentType"],
                "riskTolerance": user["riskTolerance"],
                "password": user["password"],
                "financialKnowledge": user["financialKnowledge"],
            })

        return {"status": "success"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
