import React, { useState, useEffect } from 'react';

function Character(props) {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 30,
            minHeight: 70,
            borderRadius: 15
        },
        letter: {
            padding: 18,
            margin: 5,
            backgroundColor: '#888',
            color: '#060606',
            textAlign: 'center',
            border: '1px solid black'
        }
    };

    const [characterState, setCharacterState] = useState({
        input: props.input,
        letters: []
    });

    const deleteLetter = (index) => {
        characterState.letters.splice(index, 1);
        const REBUILD_STRING = characterState.letters.join("");

        console.log(REBUILD_STRING);

        setCharacterState({
            input: props.input,
            letters: characterState.letters
        });
    };

    useEffect( () => {

        const getLetters = () => {
            return characterState.input.split("");
        }

        setCharacterState({
            input: props.input,
            letters: getLetters()
        });

    }, [props]);

    return (
        <section className="card">
            <h1 className="h4 px-4 pt-2">Letter used:</h1>
            <div style={ styles.container }>
            {
                characterState.letters.map( (letter, index) => {
                    return <span  key={ index }
                                style={ styles.letter }
                                onClick={ () => deleteLetter(index) }>
                            { letter }
                        </span>
                })
            }
            </div>
        </section>
    );
};

export default Character;