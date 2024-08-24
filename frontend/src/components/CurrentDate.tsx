




function CurrentDate() {
  // Function to get formatted current date
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div>
      <p>{getCurrentDate()}</p>
    </div>
  );
}

export default CurrentDate;