function Form() {
    function handleSubmit(e) {
      e.preventDefault();    
      console.log('Data Pass');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
}