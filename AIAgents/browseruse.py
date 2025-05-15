from browser_use import Agent
from langchain_openai import ChatOpenAI
import asyncio
from dotenv import load_dotenv

load_dotenv()

import os
print("API KEY FOUND:", os.getenv("OPENAI_API_KEY"))

# This script demonstrates how to use the Agent class to automate
async def main():
    # Define a prompt for the browser agent
    prompt = "Go to goibibo.com and book a flight form Delhi to Mumbai for tomorrow. " \
            "The flight should be in the morning and the price should be less than 10000. " \
            "Please provide the details of the flight and wait on reaching the payment page"

    # Initialize the agent with the OpenAI model and pass the prompt
    agent = Agent(
        task=prompt,
        llm=ChatOpenAI(temperature=0, model="gpt-4o"))

    # Run the agent
    await agent.run()

asyncio.run(main())