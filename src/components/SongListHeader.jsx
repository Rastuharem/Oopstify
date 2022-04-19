import "../styles/SongListHeader.css";
import { useEffect, useState } from "react";


const SongListHeader = () => {

    const [SelectedSort, setSelectedSort] = useState('index');
    const [Direction, setDirection] = useState('down');

    useEffect(()=> {
        sortMusic(SelectedSort, Direction);
    }, [SelectedSort, Direction]);
    
    const sortMusic = (sort, direction) => {
        console.log(sort);
        console.log(direction);
    }

    const indexClick = () => {
        setSelectedSort('index');
    };

    const titleClick = () => {
        setSelectedSort('title');
    };

    const authorClick = () => {
        setSelectedSort('author');
    };

    const selectorClick = () => {
        Direction === 'down' ? (
            setDirection('up')
        ) : (
            setDirection('down')
        );
    };

    return (
        <div className="song-item header">
            <button onClick={indexClick} className="btn index">#</button>
            <button onClick={titleClick} className="btn title">Title</button>
            <button onClick={authorClick} className="btn author">Author</button>
            <button onClick={selectorClick} className="btn selector">
                <i className="fas fa-chevron-down"></i>
            </button>
        </div>
    );
};

export default SongListHeader;