// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import fastaExtensions from '@jupyterlab/fasta-extension';

import geojsonExtension from '@jupyterlab/geojson-extension';

import {
  IRenderMime
} from '@jupyterlab/rendermime-interfaces';


export default [ geojsonExtension, ...fastaExtensions ] as IRenderMime.IExtension[];
