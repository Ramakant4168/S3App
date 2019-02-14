
import S3Modal from './S3Modal'

let bucketName = 'rkv-test-bucket';
let keyName = 'hello_world.txt';
let body='Hello World! this is new content';

let config={
    apiVersion: '2006-03-01'
}

let s3Moadal= new S3Modal(config);

s3Moadal.createBucket()
.then((data)=>{
    console.log('--created bucket---',bucketName);
})
.catch(err=>console.log('----err---',err))

s3Moadal.getBuckets()
.then((data)=>{

console.log('---bucket list----');
console.log(data.Buckets[0].Name);
console.log(data.Buckets[1].Name);

})
.catch(err => console.log('---err--',err))


s3Moadal.putObject(bucketName, keyName,body)
.then((data)=>{
    console.log('--uploaded--');
    console.log(data);
})

s3Moadal.getObject(bucketName, keyName)
.then((data)=>{
    console.log('---data---')
    console.log(data.Body.toString());
})
.catch(err=>console.log('---err---',err))
