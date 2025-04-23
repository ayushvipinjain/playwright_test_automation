### List of Playwright Features
https://playwright.dev/



### ZeroStep Playwright AI documentation
https://github.com/zerostep-ai/zerostep

ZeroStep AI Pros
1. Write test steps in plain English like "Click on the login button"
2. Rapid Test Development - Cuts down on element locator maintenance and code writing.
3. Dynamic Element Resolution - You don’t need to dig into the DOM unless AI fails.
4. Visual & Smart Assertions - Can validate presence of UI elements based on context, e.g., tables, charts, labels, etc.
5. Reduces Flakiness from Selector Changes 


ZeroStep AI Cons
1. Black Box AI Behavior - you don’t fully control how the AI interprets the prompt.
2. Difficult to debug failures: Was it the prompt? The page content? The AI model? Needs screenshots or manual inspection.
3. Slower Execution - take longer than traditional Playwright selectors
4. Limited Customization - Can’t always fine-tune exactly which element it clicks or selects if there are multiple matches. Unpredictable Results in Dynamic UIs
5. IntelliSense - VS Code won’t help much with AI prompts. It’s just strings, so no syntax checking, suggestions.


Best Use Cases -
1. Testing legacy systems with poor selector structure
2. Collaborating with non-technical team members
3. Useful for MVPs, spikes, or PoCs where speed matters more than precision.

