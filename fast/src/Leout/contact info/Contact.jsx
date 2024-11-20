import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div>
      <h1 className="text-3xl font-extrabold text-center mt-4">Contact info</h1>

            <div className="hero bg-base-200 min-h-screen mb-6 mt-6">
  <div className="hero-content gap-6 flex-col lg:flex-row-reverse">
    <img
      src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?semt=ais_hybrid"
      className="max-w-full rounded-lg ml-24" />
    <div >
      <h1 className="text-5xl font-bold text-center ">Contact info</h1>
      <p className="py-6 flex items-center gap-6">
      <div className=""><FaPhone size={30}/></div>  01791********
      </p>
      <p className="py-6 flex items-center gap-6">
     <div> <MdEmail size={30} /></div> diptobakshi@72gmail.com
      </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;