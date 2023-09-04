import "./Certification.css";
import Certificate from '../utility/Certificate';

function Certification() {
  const certificateMap = new Map([
    ["CSS Certificate","https://www.hackerrank.com/certificates/4a3847589543"],
    ["JavaScript (Basic) Certificate","https://www.hackerrank.com/certificates/9c73662d70ff"],
    ["Java (Basic) Certificate","https://www.hackerrank.com/certificates/0cccaa3b6c85"],
    ["JavaScript (Basic & Intermediate)4","url4"],

  ]);
  const certificateArray = Array.from(certificateMap);
  return (
    <>
      <div className="section__main" id='certification'>
        <h1 className='section__main__heading'>Certification</h1>
        <div className="section__main__inner">
          {certificateArray.map((item, index) => (
            <Certificate key={index} name={item[0]} url={item[1]}></Certificate>
          ))}
        </div>
      </div>
    </>
  );
}

export default Certification;