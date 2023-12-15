import React from 'react'
import PropTypes from 'prop-types'
import './skills.css'

const Skills = ({ skillItems }) => (
  <section id={`skills`} className={`section skills`}>
    <div className='container'>
    <header className={`intro`}>
      <h2>{skillItems.title}</h2>
    </header>
    <article>
      <p>{skillItems.description}</p>
    </article>

    {skillItems.skillset.map((item) => (
      <article key={item.name}>
        <em>{item.name}</em>
        <progress id={item.name} value={item.level} max="100">
          {item.level}
        </progress>
      </article>
    ))}
    </div>

  </section>
)

Skills.propTypes = {
  skillItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      name: PropTypes.string,
      level: PropTypes.number,
    })
  ),
}

export default Skills
