function cov_1vho4hp9ew(){var path="C:\\Users\\yenye\\Documents\\DVOPS_Projects\\devops-project-yenyew\\public\\js\\applyjob.js";var hash="c8e29eddd6096b65a89a5edc714f9881f8651aa3";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\yenye\\Documents\\DVOPS_Projects\\devops-project-yenyew\\public\\js\\applyjob.js",statementMap:{"0":{start:{line:2,column:4},end:{line:2,column:38}},"1":{start:{line:3,column:4},end:{line:3,column:80}},"2":{start:{line:7,column:18},end:{line:7,column:86}},"3":{start:{line:8,column:17},end:{line:8,column:70}},"4":{start:{line:9,column:16},end:{line:9,column:61}},"5":{start:{line:10,column:22},end:{line:10,column:80}},"6":{start:{line:11,column:18},end:{line:11,column:72}},"7":{start:{line:12,column:18},end:{line:12,column:72}},"8":{start:{line:14,column:4},end:{line:17,column:5}},"9":{start:{line:15,column:8},end:{line:15,column:44}},"10":{start:{line:16,column:8},end:{line:16,column:15}},"11":{start:{line:19,column:28},end:{line:19,column:66}},"12":{start:{line:21,column:4},end:{line:38,column:5}},"13":{start:{line:22,column:25},end:{line:26,column:10}},"14":{start:{line:28,column:23},end:{line:28,column:44}},"15":{start:{line:29,column:8},end:{line:34,column:9}},"16":{start:{line:30,column:12},end:{line:30,column:57}},"17":{start:{line:31,column:12},end:{line:31,column:46}},"18":{start:{line:33,column:12},end:{line:33,column:69}},"19":{start:{line:36,column:8},end:{line:36,column:62}},"20":{start:{line:37,column:8},end:{line:37,column:69}},"21":{start:{line:40,column:0},end:{line:40,column:25}}},fnMap:{"0":{name:"applyJob",decl:{start:{line:1,column:9},end:{line:1,column:17}},loc:{start:{line:1,column:25},end:{line:4,column:1}},line:1},"1":{name:"submitApplication",decl:{start:{line:6,column:15},end:{line:6,column:32}},loc:{start:{line:6,column:35},end:{line:39,column:1}},line:6}},branchMap:{"0":{loc:{start:{line:14,column:4},end:{line:17,column:5}},type:"if",locations:[{start:{line:14,column:4},end:{line:17,column:5}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:14},"1":{loc:{start:{line:14,column:8},end:{line:14,column:55}},type:"binary-expr",locations:[{start:{line:14,column:8},end:{line:14,column:13}},{start:{line:14,column:17},end:{line:14,column:21}},{start:{line:14,column:25},end:{line:14,column:35}},{start:{line:14,column:39},end:{line:14,column:45}},{start:{line:14,column:49},end:{line:14,column:55}}],line:14},"2":{loc:{start:{line:29,column:8},end:{line:34,column:9}},type:"if",locations:[{start:{line:29,column:8},end:{line:34,column:9}},{start:{line:32,column:15},end:{line:34,column:9}}],line:29}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0,0,0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c8e29eddd6096b65a89a5edc714f9881f8651aa3"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1vho4hp9ew=function(){return actualCoverage;};}return actualCoverage;}cov_1vho4hp9ew();function applyJob(jobId){cov_1vho4hp9ew().f[0]++;cov_1vho4hp9ew().s[0]++;$('#applyJobModal').modal('show');cov_1vho4hp9ew().s[1]++;document.getElementById('applyJobModal').setAttribute('data-job-id',jobId);}async function submitApplication(){cov_1vho4hp9ew().f[1]++;const jobId=(cov_1vho4hp9ew().s[2]++,document.getElementById('applyJobModal').getAttribute('data-job-id'));const name=(cov_1vho4hp9ew().s[3]++,document.getElementById('applicantName').value.trim());const age=(cov_1vho4hp9ew().s[4]++,document.getElementById('applicantAge').value);const education=(cov_1vho4hp9ew().s[5]++,document.getElementById('applicantEducation').value.trim());const phone=(cov_1vho4hp9ew().s[6]++,document.getElementById('applicantPhone').value.trim());const email=(cov_1vho4hp9ew().s[7]++,document.getElementById('applicantEmail').value.trim());cov_1vho4hp9ew().s[8]++;if((cov_1vho4hp9ew().b[1][0]++,!name)||(cov_1vho4hp9ew().b[1][1]++,!age)||(cov_1vho4hp9ew().b[1][2]++,!education)||(cov_1vho4hp9ew().b[1][3]++,!phone)||(cov_1vho4hp9ew().b[1][4]++,!email)){cov_1vho4hp9ew().b[0][0]++;cov_1vho4hp9ew().s[9]++;alert('Please fill in all fields.');cov_1vho4hp9ew().s[10]++;return;}else{cov_1vho4hp9ew().b[0][1]++;}const applicationData=(cov_1vho4hp9ew().s[11]++,{name,age,education,phone,email});cov_1vho4hp9ew().s[12]++;try{const response=(cov_1vho4hp9ew().s[13]++,await fetch(`/apply-job/${jobId}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(applicationData)}));const result=(cov_1vho4hp9ew().s[14]++,await response.json());cov_1vho4hp9ew().s[15]++;if(response.ok){cov_1vho4hp9ew().b[2][0]++;cov_1vho4hp9ew().s[16]++;alert('Application submitted successfully!');cov_1vho4hp9ew().s[17]++;$('#applyJobModal').modal('hide');}else{cov_1vho4hp9ew().b[2][1]++;cov_1vho4hp9ew().s[18]++;alert('Failed to submit application: '+result.message);}}catch(error){cov_1vho4hp9ew().s[19]++;console.error('Error submitting application:',error);cov_1vho4hp9ew().s[20]++;alert('An error occurred while submitting the application.');}}cov_1vho4hp9ew().s[21]++;window.onload=loadJobs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXZobzRocDlldyIsImFjdHVhbENvdmVyYWdlIiwiYXBwbHlKb2IiLCJqb2JJZCIsImYiLCJzIiwiJCIsIm1vZGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsInN1Ym1pdEFwcGxpY2F0aW9uIiwiZ2V0QXR0cmlidXRlIiwibmFtZSIsInZhbHVlIiwidHJpbSIsImFnZSIsImVkdWNhdGlvbiIsInBob25lIiwiZW1haWwiLCJiIiwiYWxlcnQiLCJhcHBsaWNhdGlvbkRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwianNvbiIsIm9rIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsIndpbmRvdyIsIm9ubG9hZCIsImxvYWRKb2JzIl0sInNvdXJjZXMiOlsiYXBwbHlqb2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXBwbHlKb2Ioam9iSWQpIHtcclxuICAgICQoJyNhcHBseUpvYk1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseUpvYk1vZGFsJykuc2V0QXR0cmlidXRlKCdkYXRhLWpvYi1pZCcsIGpvYklkKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3VibWl0QXBwbGljYXRpb24oKSB7XHJcbiAgICBjb25zdCBqb2JJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseUpvYk1vZGFsJykuZ2V0QXR0cmlidXRlKCdkYXRhLWpvYi1pZCcpO1xyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBsaWNhbnROYW1lJykudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2FudEFnZScpLnZhbHVlO1xyXG4gICAgY29uc3QgZWR1Y2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2FudEVkdWNhdGlvbicpLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2FudFBob25lJykudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbGljYW50RW1haWwnKS52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgaWYgKCFuYW1lIHx8ICFhZ2UgfHwgIWVkdWNhdGlvbiB8fCAhcGhvbmUgfHwgIWVtYWlsKSB7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGxpY2F0aW9uRGF0YSA9IHsgbmFtZSwgYWdlLCBlZHVjYXRpb24sIHBob25lLCBlbWFpbCB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwcGx5LWpvYi8ke2pvYklkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhcHBsaWNhdGlvbkRhdGEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0FwcGxpY2F0aW9uIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgICAgICAgICQoJyNhcHBseUpvYk1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHN1Ym1pdCBhcHBsaWNhdGlvbjogJyArIHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1Ym1pdHRpbmcgYXBwbGljYXRpb246JywgZXJyb3IpO1xyXG4gICAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzdWJtaXR0aW5nIHRoZSBhcHBsaWNhdGlvbi4nKTtcclxuICAgIH1cclxufVxyXG53aW5kb3cub25sb2FkID0gbG9hZEpvYnM7Il0sIm1hcHBpbmdzIjoia2tHQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLFFBQVMsQ0FBQUUsUUFBUUEsQ0FBQ0MsS0FBSyxDQUFFLENBQUFILGNBQUEsR0FBQUksQ0FBQSxNQUFBSixjQUFBLEdBQUFLLENBQUEsTUFDckJDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUNQLGNBQUEsR0FBQUssQ0FBQSxNQUNsQ0csUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNDLFlBQVksQ0FBQyxhQUFhLENBQUVQLEtBQUssQ0FBQyxDQUMvRSxDQUVBLGNBQWUsQ0FBQVEsaUJBQWlCQSxDQUFBLENBQUcsQ0FBQVgsY0FBQSxHQUFBSSxDQUFBLE1BQy9CLEtBQU0sQ0FBQUQsS0FBSyxFQUFBSCxjQUFBLEdBQUFLLENBQUEsTUFBR0csUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNHLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFDbEYsS0FBTSxDQUFBQyxJQUFJLEVBQUFiLGNBQUEsR0FBQUssQ0FBQSxNQUFHRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0ssS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxFQUNsRSxLQUFNLENBQUFDLEdB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