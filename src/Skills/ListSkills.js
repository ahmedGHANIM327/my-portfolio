import React from 'react'

export default function ListSkills() {

    const skills = 
    [
        {
            "id":0,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
            "title":"JavaScript"
        },
        {
            "id":1,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
            "title":"Python"
        },
        {
            "id":2,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
            "title":"Java"
        },
        {
            "id":3,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
            "title":"TypeScript"
        },
        {
            "id":4,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
            "title":"React"
        },
        {
            "id":5,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg",
            "title":"Django"
        },
        {
            "id":6,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg",
            "title":"Angular"
        },
        {
            "id":7,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
            "title":"NodeJS"
        },
        {
            "id":8,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
            "title":"PostgreSQL"
        },
        {
            "id":9,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
            "title":"MySQL"
        },
        {
            "id":10,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg",
            "title":"Material-UI"
        },
        {
            "id":11,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
            "title":"Bootstrap"
        },
        {
            "id":12,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
            "title":"Firebase"
        }
    ]

    return (
        <div className="list_Skills">
            {skills.map( s => {
                return (<div className='skill_item' key={s.id}>
                    <img src={s.image}/>
                    <p>{s.title}</p>
                </div>)
            })}
        </div>
  )
}