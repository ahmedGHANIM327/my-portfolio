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
        },
        {
            "id":13,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
            "title":"Git"
        },
        {
            "id":14,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
            "title":"MongoDB"
        },
        {
            "id":15,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg",
            "title":"GraphQL"
        },
        {
            "id":16,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
            "title":"Sass"
        }
    ]

    // Front-End Skills
    const front_end_skills = [
        {
            "id":0,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
            "title":"JavaScript"
        },
        {
            "id":1,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
            "title":"TypeScript"
        },
        {
            "id":2,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
            "title":"React"
        },
        {
            "id":3,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
            "title":"Redux"
        },
        {
            "id":4,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg",
            "title":"Angular"
        },
        {
            "id":5,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg",
            "title":"Material-UI"
        },
        {
            "id":6,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
            "title":"Bootstrap"
        },
        {
            "id":7,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
            "title":"Sass"
        }
    ]

    const back_end_skills = [
        {
            "id":0,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
            "title":"Python"
        },
        {
            "id":1,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
            "title":"Java"
        },
        {
            "id":2,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg",
            "title":"Django"
        },
        {
            "id":3,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
            "title":"NodeJS"
        },
        {
            "id":4,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg",
            "title":"Express JS"
        }
    ]

    const data_cloud_skills = [
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
            "id":12,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
            "title":"Firebase"
        },
        {
            "id":14,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
            "title":"MongoDB"
        },
        {
            "id":15,
            "image":"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg",
            "title":"GraphQL"
        }
    ]



    return (
        <>
            <div className="skills_categorie" data-aos="zoom-in">
                <p className='skills_categorie_title'>Front-End Development</p>
                {front_end_skills.map( s => {
                    return (<div className='skill_item' key={s.id}>
                        <img src={s.image}/>
                        <p>{s.title}</p>
                    </div>)
                })}
            </div>
            <div className="skills_categorie" data-aos="zoom-in">
                <p className='skills_categorie_title'>Back-End Development</p>
                {back_end_skills.map( s => {
                    return (<div className='skill_item' key={s.id}>
                        <img src={s.image}/>
                        <p>{s.title}</p>
                    </div>)
                })}
            </div>
            <div className="skills_categorie" data-aos="zoom-in">
                <p className='skills_categorie_title'>Data integration & Cloud</p>
                {data_cloud_skills.map( s => {
                    return (<div className='skill_item' key={s.id}>
                        <img src={s.image}/>
                        <p>{s.title}</p>
                    </div>)
                })}
            </div>
        </>
  )
}