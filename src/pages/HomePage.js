import { Link } from 'react-router-dom';
import data from "../data";

function HomePage() {
    return <div>
        <h1>Choose a theme</h1>
        <div className="themes">
            {data.themes.map((theme) => (
                <div className="theme" key={theme.slug}>
                    <Link to={`/theme/${theme.slug}`}>
                        <img src={theme.image} alt={theme.name} />
                    </Link>
                    <div>
                        <Link to={`/theme/${theme.slug}`}>
                            <p>{theme.name}</p>
                        </Link>
                        <p><strong>{theme.description}</strong></p>
                    </div>
                </div>
            ))}
        </div>
    </div>;
}
export default HomePage;