const Sweet = () => {
  return (
    <div className="form-group row mt-3 sweet" id="first">
      <div className="col-sm-3">Ingredients</div>
      <div className="col-sm-8">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Cream
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Jam
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Peanut butter
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Plazma
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1">
            Sour Cherry
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sweet;
