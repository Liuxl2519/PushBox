var c = new Cbg({
	container: ".canvas",
	//随机生成动画，默认无控制
	control: "auto",
	//鼠标跟随控制
	//control: "mouse",
	//坐标点定位控制
	//control: "coordinate",
	//设置坐标点，默认屏幕中心，坐标点定位控制时使用
	//x: $(window).width() / 2,
	//y: $(window).height() / 2
	//Canvas宽度高度自定义,默认全屏
	width: $(window).width(),
	height: $(window).height(),
	//生成点尺寸设置
	//size: [初始大小, 尺寸衰减速率（数值越大，尺寸缩减越快，反之越慢，最小不得小于0.01）],
	size: [10, 0.2],
	//生成点的类型，type
	//type：color 生成点为颜色块
	type: "color",
	//生成点颜色列表，随机刷新颜色
	color: ["#6525EE", "#007AFF", "orange", "orangered"],
	//生成点颜色单值，固定颜色刷新
	//color: "red",

	//type：img 生成点为图片，图片比例1：1
	//type: "img",
	//生成点图片列表，随机刷新图片
	//imgUrl: ["图片路径", "图片路径"，....],
	//生成点图片单值，固定图片刷新
	//imgUrl: "图片路径",
	//动画类型：
	//animation_type: 0（默认动画，随机方位，随机方向）
	//animation_type: 1（向左运动）
	//animation_type: 2（向右运动）
	//animation_type: 3（向下运动）
	//animation_type: 4（向上运动）
	animation_type: 0,
	//生成点生成速率，数值越大，点的生成越慢
	speed: 10,
})