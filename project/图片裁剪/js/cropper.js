// 设置弹出框水平垂直居中
(window.onresize = function () {
  var win_height = $(window).height();
  var win_width = $(window).width();

  // 设置更换图片按钮位置
  $(".changeImg").css({
    "top": "20%",
    "left": (win_width - $(".changeImg").outerWidth()) / 2
  });

  if (win_width <= 768) {
    $(".tailoring-content").css({
      "top": (win_height - $(".tailoring-content").outerHeight()) / 2,
      "left": 0
    });
  } else {
    $(".tailoring-content").css({
      "top": (win_height - $(".tailoring-content").outerHeight()) / 2,
      "left": (win_width - $(".tailoring-content").outerWidth()) / 2
    });
  }

})();


// 弹出图片裁剪框
$("#replaceImg").on("click", function () {
  // 默认是隐藏;切换元素的可见状态
  $(".tailoring-container").toggle();
});

// 关闭裁剪框
function closeTailor() {
  // console.log('closeTailor');
  $(".tailoring-container").toggle();
}

// 图像上传
function selectImg(file) {
  // dom
  // console.log(file);
  // 获取文件数组
  // console.log(file.files);

  // console.log(Object.prototype.toString.call(file.files));    // [object FileList]
  // console.log(Object.prototype.toString.call(file.files[0])); // [object File] 文件对象

  if (!file.files || !file.files[0]) {
    return;
  }

  // 使用 FileReader 预览图片
  var reader = new FileReader();

  // readAsDataURL方法可以将File对象转化为data: URL格式的字符串（base64编码）
  reader.readAsDataURL(file.files[0]);

  // 在读取操作完成时触发
  reader.onload = function (evt) {
    // reader.result == evt.target.result => base64格式url/dataURL
    // console.log(reader.result);
    // console.log(evt.target.result);
    // console.log(reader.result == evt.target.result);

    var replaceSrc = evt.target.result;

    // 设置需要剪裁的图片
    $('#tailoringImg').src = replaceSrc;

    // Replace the image's src and rebuild the cropper.
    $('#tailoringImg').cropper('replace', replaceSrc, false); //默认false，适应高度，不失真
  }

}

// cropper图片裁剪
$('#tailoringImg').cropper({
  aspectRatio: 1650 / 798, // 默认比例,设置图片剪裁比例，决定实际输出图片比例
  preview: '.previewImg',  // 将待裁剪的图片绑定到预览视图dom
  guides: true,            // 裁剪框的虚线(九宫格)
  autoCropArea: 1,         // 0-1之间的数值，定义自动剪裁区域的大小，默认0.8
  movable: false,          // 是否允许移动图片
  dragCrop: true,          // 是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
  movable: true,           // 是否允许移动剪裁框
  resizable: true,         // 是否允许改变裁剪框的大小
  zoomable: false,         // 是否允许缩放图片大小
  mouseWheelZoom: false,   // 是否允许通过鼠标滚轮来缩放图片
  touchDragZoom: true,     // 是否允许通过触摸移动来缩放图片
  rotatable: true,         // 是否允许旋转图片
  crop: function (e) {
    // 输出结果数据裁剪图像(每次旋转、换向等操作都是输出...)
    // console.log(e)
  }
});


// 旋转
$(".cropper-rotate-btn").on("click", function () {
  $('#tailoringImg').cropper("rotate", +45);
});
// 复位(Reset the image and crop box to their initial states.)
$(".cropper-reset-btn").on("click", function () {
  $('#tailoringImg').cropper("reset");
});

//换向
var flagX = true;
$(".cropper-scaleX-btn").on("click", function () {
  if (flagX) {
    $('#tailoringImg').cropper("scaleX", -1);
    flagX = false;
  } else {
    // When equal to 1 it does nothing.
    $('#tailoringImg').cropper("scaleX", 1);
    flagX = true;
  }
  flagX != flagX;
});

// 裁剪后的处理 - 确认裁剪
$("#sureCut").on("click", function () {
  if ($("#tailoringImg").attr("src") == null) {
    return false;
  } else {
    // 获取被裁剪后的canvas
    var canvas = $('#tailoringImg').cropper('getCroppedCanvas');
    var context = canvas.getContext("2d");

    // 输出指定像素的图片
    // var w = 1920; //canvas的宽
    // var h = 798;  //canvas的高

    // var img = new Image();
    // img.crossOrigin = 'Anonymous';  //解决Canvas.toDataURL 图片跨域问题
    // img.src = url;

    // context.drawImage(img, 0, 0, w, h);

    // 转换为base64地址形式
    // canvas.toDataURL(type, encoderOptions);
    // type:图片格式，默认为 image/png
    // encoderOptions:在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量
    var base64url = canvas.toDataURL('image/png', 1);
    console.log(base64url);

    // 设置属性和值(设置src)
    $("#finalImg").prop("src", base64url);


    // 确认裁剪后提交到后台接口
    // ...



    // 关闭裁剪框
    closeTailor();
  }
});
