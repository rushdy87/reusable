import Button from './components/Button/Button';

const App = () => {
  return (
    <div>
      <Button>اضغط هنا</Button>
      <br />
      <Button className='primary'>اضغط هنا</Button>
      <br />
      <Button className='secondary'>اضغط هنا</Button>
      <br />
      <Button className='success'>اضغط هنا</Button>
      <br />
      <Button className='info'>اضغط هنا</Button>
      <br />
      <Button className='warning'>اضغط هنا</Button>
      <br />
      <Button className='danger'>اضغط هنا</Button>
      <br />
      <Button className='light'>اضغط هنا</Button>
      <br />
      <Button className='dark'>اضغط هنا</Button>
    </div>
  );
};

export default App;
