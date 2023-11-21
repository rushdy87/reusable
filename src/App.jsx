import Input from './components/Input/Input';

const App = () => {
  return (
    <div>
      <Input
        label='الاسم'
        type='text'
        id='name'
        name='name'
        placeholder='الاسم'
      />
      <Input label='رقم الحاسبة' type='number' />
      <Input label='تاريخ المباشرة' type='date' />
    </div>
  );
};

export default App;
