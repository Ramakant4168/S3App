import AWS from 'aws-sdk';

class S3Modal{

constructor(config){
    this.s3=new AWS.S3(config);
}

getBuckets(){
  return  this.s3.listBuckets().promise();  
}

createBucket(bucketName){
    return  this.s3.createBucket({Bucket: bucketName}).promise();
}

putObject(bucketName, keyName, Objectcontent){
    let objectParams = {
        Bucket: bucketName,
        Key: keyName,
        Body: Objectcontent,
    };

    return  this.s3.putObject(objectParams).promise();
};



getObject(bucketName, keyName){
    let objectParams = {
        Bucket: bucketName,
        Key: keyName,
    };

    return  this.s3.getObject(objectParams).promise();
}

}

module.exports=S3Modal;