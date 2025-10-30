const update = data.map((item) => (
    { ...item, level: item.designation === "DA" ? "intern" : "Junior" }
))
console.log(update);