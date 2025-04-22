# playwright_test_automation


### To use the ZeroStep-AI Playwright Library 
```
export ZEROSTEP_TOKEN="<your token here>" 
```

```
ai() returns a result object like:
{
  status: 'passed' | 'failed',
  step: 'your prompt',
  details: { ... },
  error?: string
}
```