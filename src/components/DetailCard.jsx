import Form from 'react-bootstrap/Form';

export default function DetailCard({ desc = "This a a task" }) {
    return (
        <Form className="border border-slate-600  w-full p-4 flex justify-start align-center">
        {['checkbox'].map((type) => (
        <div key={type} className="ml-20 flex gap-4 align-center">
            <div className='bg-zinc-500 h-15 w-2 rounded-lg'></div>
            <Form.Check.Input className='mr-2 scale-150' type={type} isValid />
          <Form.Check type={type} className="flex flex-col">
            <Form.Check.Label>{desc}</Form.Check.Label>
          </Form.Check>
        </div>
      ))}
    </Form>
       
    )
}