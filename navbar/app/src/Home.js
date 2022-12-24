export default function Home(){
    return(
        <div className="home">
            <h1>Home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum aliquid quis esse enim dignissimos vero doloribus iste minus illum, voluptas veritatis eligendi ullam delectus sit dolorum itaque animi omnis libero!</p>
            <h3>Liste des articles</h3>
            <ul>
                articles.map(elem) => <Aarticle title={elem.title} body= {elem.body}/>
                <li>dolor sit amet consectetur</li>
                <li>sit amet consectetur</li>
                <li>sit amet consectetur</li>
            </ul>
        </div>
    )
}