const Salty = () => {
  return (
    <div className="form-group row mt-3 salt" id="second">
      <div className="col-sm-3">Ingredients</div>
      <div className="col-sm-8">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Sausage
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Sour cream
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Ketchap
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Prosciutto
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Salami
          </label>
        </div>
      </div>
    </div>
  );
};
export default Salty;
