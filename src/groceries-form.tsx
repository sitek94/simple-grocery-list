type GroceriesFormProps = {
  onAdd: () => void;
};

export default function GroceriesForm({ onAdd }: GroceriesFormProps) {
  return (
    <form className="groceries-form">
      <div className="form-control inline">
        <label>Icon</label>
        <input type="text" />
      </div>
      <div className="form-control inline">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input type="number" />
      </div>
      <input className="submit-btn" type="submit" value="Add" />
    </form>
  );
}
