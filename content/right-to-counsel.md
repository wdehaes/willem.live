---
title: Residential Evictions and Right To Counsel
navigation:
  id: right-to-counsel
  description: Interactive map showing eviction and household financial data per NYC neighborhood.
  width: 2
  tag: data
  order: 1
---

::header-c
#image
:img-c{name="thumbnail" project="right-to-counsel" bottom-margin="mb-3"}

#title
{{ $doc.title }}

#description
Interactive map showing eviction and household financial data per NYC neighborhood.

#tag
DATA
::
::body-c
As a final project for our Reporting class in the Fall 2018 semester, our class reported a series of stories on the rollout of the Right To Counsel, a legislative initiative to provide free legal counsel to any tenant in New York City facing eviction. Together with Aaron Brezel, I built an interactive map to show statistics per neighborhood, which accompanied the series.

We gathered eviction data from NYC Open Data, population data from the U.S. Census Bureau and medium household income data comes from the U.S. Census Bureau. The data was cleaned and combined in R and JavaScript. To build the layers, we used zip code data from Open Data Delaware and Neighborhood Tabulation Area data from Baruch College. We created a map in Mapbox and used JavaScript and the Mapbox API to build the popups. A more extensive description of our process can be found [here](https://github.com/wdehaes/marshalEvictionData/blob/master/README.md){:target="\_blank" style="text-decoration: underline;"}

:iframe-c{src="https://willemdehaes.bitbucket.io/"}
The article, including the map, was originally published [here](http://theink.nyc/whats-gone-right-wrong-right-counsel/){:target="\_blank" style="text-decoration: underline;"} on Nov. 9, 2018. The source code can be found [here](https://github.com/wdehaes/marshalEvictionData){:target="\_blank" style="text-decoration: underline;"}.
::
