import TechnologiesStyled from "./TechnologiesStyled";

const Technologies = () => {
  return (
    <TechnologiesStyled id="technologies">
      <h3>technologies</h3>
      <h5>USING NOW:</h5>
      <div className="technologies__in-use__list">
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/html-5.webp"
            alt="html5"
          />
          <h4>HTML5</h4>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/css-3.webp"
            alt="css3"
          />
          <h4>CSS3</h4>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/sass.webp"
            alt="sass"
          />
          <h4>SASS</h4>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/js.webp?t=2022-12-16T10%3A18%3A19.633Z"
            alt="JavaScript"
          />
          <h4>JavaScript</h4>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/react.webp?t=2022-12-16T10%3A19%3A55.003Z"
            alt="React"
          />
          <h4>React</h4>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/git.webp"
            alt="Git"
          />
          <h4>Git</h4>
        </div>
        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/typescript.webp?t=2022-12-16T10%3A20%3A58.702Z"
            alt="TypeScript"
          />
          <h4>TypeScript</h4>
        </div>

        <div className="technologies__list__item">
          <img
            src="https://oopugzqermglvumujghs.supabase.co/storage/v1/object/public/images/redux.webp?t=2022-12-16T10%3A25%3A58.447Z"
            alt="Redux Toolkit"
          />
          <h4>Redux Toolkit</h4>
        </div>
      </div>
    </TechnologiesStyled>
  );
};

export default Technologies;
