import gmplot

lat=[19.0790,19.0810,19.0850]
lang=[72.890,72.910,72.930]
gmapOne=gmplot.GoogleMapPlotter(19.0760,72.8777,15)
gmapOne.scatter(lat,lang,'#ff000', size=50, marker=False)
gmapOne.plot(lat, lang,"blue", edge_width=2.5)
gmapOne.draw("map.html")
