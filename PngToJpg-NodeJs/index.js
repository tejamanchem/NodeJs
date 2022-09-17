const jimp =  require('jimp')

jimp.read('./static/images11.png',function(err,image){
    if(err){
        console.log(err)
        return

    }
    image.write('./output/out.jpg')
})