 let c=new Promise((suc,fai)=>{
	suc("i am resolved");
	fai("i am rejected")
})
c.then(console.log)
 .catch(console.log)
 
 
 //function
 
 function a(){
	 return new Promise((e,f)=>{
		 setTimeout(()=>{
         e("timeout");
		 },3000)	
	 })
 }
a().then(console.log)
   .catch(console.log) 
   
   
      //promise chaining
	  
	  function a(){
		  return new Promise((c,d)=>{
			  setTimeout(()=>{
			  c("1");
		  },5000)
		  })
	  }
		   function b(){
		  return new Promise((e,f)=>{
			  
		  setTimeout(()=>{
			  e("2")
			 },1000)
		  })
		   }
		  a().then (()=>{
			  
		      
		   return b().then()
		     .catch(console.log)
			 
			 
			 
			 // Find Palindrome Number Using Promise Method:
				 
				        let p=parseInt(prompt("Enter the value"));
						let o=p;
							   let sum=0
							   while(p!=0){
								   
								  let rem=p%10;
								  p=(p-rem)/10;
								  sum=(sum *10)+rem
                           		
												   }
									 function pali(val){
										 return new Promise((re,rj)=>{
												 
											 if(sum==val){
												 re(val)
											 }
											 else{
												 rj(val)
											 }
															 })
									   
									 }
									 pali(o).then((q)=>{
										 console.log(`${q} is a palindrome`)
									 })
									 .catch((r)=>{
										  console.log(`${r} is not a palindrome`)
									 })
									 
									 
									 // Find Armstrong Number Using Promise Method:
									 
									 let x=parseInt(prompt("Enter The Value"))
									  let y=x;
									  let z=y;
								      let sun=0;
                                      let count=0
                                      while(x>0){
										 let rem=x%10
										  x=(x-rem)/10
										  count++
									  }									 
 									  while(y!=0){
										   let rem=y%10
										   y=(y-rem)/10
										   sun=sun+(rem**count)
									  }
									  
									  function arm(z){
										  return new Promise((suc,fail)=>{
											  if(z==sun){
										 suc(z)
									  }
									  else{
										  fail(z)
									  }
										  })									 
									  }
									  arm(z).then((e)=>{
										   console.log(`${e} It's Armstrong`)
									  })
									  .catch((f)=>{
										  console.log(`${f} Not Armstrong`)
									  })
			 
			 
			 
			 
			 
			 