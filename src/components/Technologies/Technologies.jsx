import TechnologiesStyled from "./TechnologiesStyled";

const Technologies = () => {
  return (
    <TechnologiesStyled>
      <h3>technologies</h3>
      <h5>USING NOW:</h5>
      <div className="technologies__in-use__list">
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/html-5.webp"
            alt="html5"
          />
          <h2>HTML5</h2>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/css-3.webp"
            alt="css3"
          />
          <h2>CSS3</h2>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/sass.webp"
            alt="sass"
          />
          <h2>SASS</h2>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/js.webp?t=2022-12-16T10%3A18%3A19.633Z"
            alt="JavaScript"
          />
          <h2>JavaScript</h2>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/react.webp?t=2022-12-16T10%3A19%3A55.003Z"
            alt="React"
          />
          <h2>React</h2>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/git.webp"
            alt="Git"
          />
          <h2>Git</h2>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/styled-components-1.webp"
            alt="Styled Components"
          />
          <h2>Styled Components</h2>
        </div>

        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/typescript.webp?t=2022-12-16T10%3A20%3A58.702Z"
            alt="TypeScript"
          />
          <h2>TypeScript</h2>
        </div>

        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/redux.webp?t=2022-12-16T10%3A25%3A58.447Z"
            alt="Redux Toolkit"
          />
          <h2>Redux Toolkit</h2>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/mongodb-icon-1.webp?t=2022-12-16T10%3A27%3A59.864Z"
            alt="MongoDB"
          />
          <h2>MongoDB</h2>
        </div>
      </div>
      <h5 className="learning-technologies__title">LEARNING:</h5>
      <div className="technologies__in-use__list">
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/nodejs-icon.webp?t=2022-12-16T10%3A31%3A02.716Z"
            alt="Node.js"
          />
          <h2>Node.js</h2>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/material-ui-1.webp?t=2022-12-16T10%3A32%3A05.946Z"
            alt="MaterialUI"
          />
          <h2>MaterialUI</h2>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/bootstrap-5-1.webp?t=2022-12-16T10%3A33%3A18.125Z"
            alt="Bootstrap"
          />
          <h2>Bootstrap</h2>
        </div>
      </div>
    </TechnologiesStyled>
  );
};

export default Technologies;
