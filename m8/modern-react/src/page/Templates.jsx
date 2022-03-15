function Templates() {
    const title = 'Welcome to the new blog';
    const likes = 50;
    const person = { name: "Shahadat", age: 28 }
    const link = "https://github.com/"
    return (
        <div>
            <h1>{title}</h1>
            <h3>{likes}</h3>
            <p>{person.name} {person.age}</p>

            <p>{8 + 4}</p>
            <p>{8 - 4}</p>
            <p>{8 * 4}</p>
            <p>{8 / 4}</p>

            <h3>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}</h3>
            <h3>{"Shahadat"}</h3>
            <h3>{Math.random() * 100}</h3>
            <a href={link}>Github</a>
        </div>
    );
}

export default Templates;
