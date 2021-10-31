import  "./boyhostel.css";

const courseName = ["B.Tech","M.Tech","MBA","BCA","MCA","BBA","B.Pharma","M.Pharma"];
const floorName =["Ground Floor","First Floor","Second Floor","Third Floor","Fourth Floor"];
const roomNumber =["Room-1","Room-2","Room-3","Room-4","Room-5","Room-6","Room-7","Room-8","Room-9","Room-10",
"Room-11","Room-12","Room-13","Room-14","Room-15","Room-16","Room-17","Room-18","Room-19",
"Room-20","Room-21","Room-22"];

const GirlHostelbook = () => {
  return ( 
    <>
      <div>
    <h1 className="boysHead">Girls Hostel Book Application Form </h1>
      <div className="boyhostelDiv">
      
        <form>
      <label>Name of the applicant :</label>
          <input type="text" name="name" 
          placeholder="Your Name" required
         />
          <label>Aadhar Number :</label>
          <input type="number" name="aadhar" 
          placeholder="Your Aadhar Number" required
         />
          <label>Colleges/Universities Resistration Number :</label>
          <input type="number" name="resNumber" 
          placeholder="Your Resistration Number" required
         />
          <label>Father’s Name :</label>
          <input type="text" name="father" 
          placeholder="Your Father’s Name" required
         />
           <label>Mother’s Name :</label>
          <input type="text" name="mother" 
          placeholder="Your Mother’s Name " required
         />
           <label>Date of Birth:</label>
          <input type="date" name="dateof" 
          placeholder="Your Date of Birth" required
         />
         <label>Select Course Name :</label>
         <select>
           {
             courseName.map((course) =>{
               return <option>{course}</option>
             }) 
           }
         </select>
           <label>Branch Name :</label>
          <input type="text" name="email" 
          placeholder="Your Email" 
         />
         <label>Select Floor :</label>
         <select>
           {
             floorName.map((floor) =>{
               return <option>{floor}</option>
             }) 
           }
         </select>
         <label>Select Room Number :</label>
         <select>
           {
             roomNumber.map((room) =>{
               return <option>{room}</option>
             }) 
           }
         </select>

           <label> Blood Group :</label>
          <input type="text" name="blood" 
          placeholder="Your  Blood Group " 
         />
           <label>Allergy to any Medicine if Yes, Please mention :</label>
          <input type="text" name="allergy" 
          placeholder="Your Email" 
         />
         
         <label> Mobile Number :</label>
          <input type="number" name="mobile" 
          placeholder="Your  Mobile Number " required
         />
          
          <label>Permanent Address :</label>
          <input type="text" name="address" 
          placeholder="Your Permanent Address" required
         />
          <label>State Name :</label>
          <input type="text" name="state" 
          placeholder="Your State Name" 
         />
          <label>District Name :</label>
          <input type="text" name="dist" 
          placeholder="Your District Name" required
         />
          <label>Pincode Number :</label>
          <input type="number" name="pincode" 
          placeholder="Your Pincode Number" required 
         />
         
         <button className="Submitformboy">Submit</button>
         </form>
      </div>
    </div>
    </>
   );
}
 
export default GirlHostelbook;