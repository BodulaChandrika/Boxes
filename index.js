const Box = props => {
  //  Write your code here.
  const {className, classText} = props;
  const containerClassName = {`container ${className}`}

  return (
    <div className={containerClassName}>
      <p className={className}>{classText}</p>
    </div>
  );
};
 

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='container-list d-flex flex-row justify-content-center'>
      <Box className='small' classText='Small' />
      <Box className='Medium' classText='Medium' />
      <Box className='Large' classText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
