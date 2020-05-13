# Sidewalk Widths for accessibility

Adapatation of the [work](https://github.com/meliharvey/sidewalkwidths-nyc) done for the New York city, adapted for the theme of accessibility in Municipality 9 in the city of Milano.

## Methodology adapted

1) Polygons from NYC open data
![Sidewalk Polygons](assets/sidewalk_polygons.png)

2) Dissolve adjacent sidewalk polygons
![Sidewalk Polygons Dissolved](assets/sidewalk_polygons_dissolved.png)

3) Find sidewalk centerlines
![Centerlines](assets/centerline.png)

4) Remove short ends and simplify
![Centerlines Simplified](assets/centerline_simplified.png)

5) Measure distance from centerlines to original polygon
![Centerlines Widths](assets/centerline_widths.png)



