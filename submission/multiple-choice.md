# Multiple-Choice Questions

---

### Set Timeout

What will the following JavaScript code output?

```javascript
var i = 0;

for (i = 0; i < 3; i = i + 1)
{
	setTimeout(function()
	{
		alert(i);
	}, 1000 + 1);
}

```

- [x] Number 3 alerted three times
- [ ] Number 0 alerted three times
- [ ] Numbers 1,2,3 alerted
- [ ] undefined

---

### Recursive Assignment

What will the following JavaScript code output?

```javascript
var a = b = 5;
console.log(b);
```

- [ ] undefined
- [X] 5
- [ ] null
- [ ] Reference Error: b is not defined

---

[Return to Index](../readme.md)
