import React, { Component } from 'react';

import igv from 'igv';

var style = {
  paddingTop: '10px',
  paddingBottom: '10px',
  margin: '8px',
  border: '1px solid lightgray'
}

class Browser extends Component {
  componentDidMount() {
    var igvContainer = document.getElementById('igv-div');
    var igvOptions = {
      genome: 'hg19', 
      locus: 'BRCA1',
      tracks: [
        {
          type: "alignment",
          format: "bam",
          name: "test",
          url: "gs://genomics-public-data/platinum-genomes/bam/NA12889_S1.bam",
          indexURL: "gs://genomics-public-data/platinum-genomes/bam/NA12889_S1.bam.bai"
        }
      ]
    };
    return igv.createBrowser(igvContainer, igvOptions);
  }

  render() {
    return (
      <div id="igv-div" style={style}></div>
    );
  }
}

export default Browser;
