# 笔记

## 去除a的下划线

text-decoration: none;


## 去除li的圆点

list-style-type: none;

## 盒子水平居中

需给盒子一个宽度
margin: 0 auto;

## 文字居中

line-height:div高度
text-align:center

## 清除浮动

1、伪元素清除浮动
.clearfix:after{content:"";display:block;height:0;clear:both;visibility: hidden;}
.clearfix{*zoom: 1;}
然后为要清除浮动的元素加上clearfix这个class

2、overflow:hidden; 溢出回隐藏

## 去除多余边框

!()["../HeiM/Docment/img/切除.jpg"]

父元素宽度大于子元素，防止子元素换行

爷爷元素长宽都略小于子元素，然后overflow:hidden;即可完成切除

## 图片文字底部对齐
vertical-align: middle;

## 圆角
border-radius: 50%

## 阴影
box-shadow: 3px 6px 25px #c3c3c3;