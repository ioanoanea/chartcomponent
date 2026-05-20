# chartcomponent
A lightweight, clean React library built on pure SVG for rendering data charts. It requires no heavy external dependencies and is extremely easy to integrate into any modern React application.

# Requirements
requires React 18+

# Installation
Install the library using npm
```Bash
npm install chartcomponent-io
```
# Quick Start
Import the components directly from the library and add them to your JSX/TSX file.
```JavaScript
import { PieChart } from 'chartcomponent-io';

export default function App() {
  const myData = [20, 78, 34];

  return (
    <div>
      <h2>My Chart</h2>
      <PieChart data={myData} colors={["#4f46e5", "#22cddd", "#218143"]} width={400} height={400} />
    </div>
  );
}
```
# Components
The library currently offers 3 types of charts, each with a set of easily customizable props.

### 1. `<PieChart/>`
Generates a circular pie chart divided into sections proportional to the provided data.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | Array of numbers | `[35, 65]` | The set of values for the pie slices. |
| `colors` | Array of strings | `["#4f46e5", "#f59e0b"]` | HEX/RGB color codes for the slices. |
| `labels` | Array pf strings | `["january", "february"]` | Label names for each data entry. If the labels property is set a legend will appear with the chart, otherwise the chart will be shown with no lgend |
| `width` | Number | `200` | The total width of the SVG container (in pixels). |
| `height` | Number | `200` | The total height of the SVG container (in pixels). |

**Usage example:**
```JavaScript
 <PieChart
    data={[20, 30, 40]}
    colors={["#4f46e5", "#22cddd", "#218143"]}
    labels={["january", "february", "March"]}
    width={400}
    height={400}
  />
```

### 1. `<BarChart/>`
Displays a classic vertical bar chart, ideal for comparing individual numeric values.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | Array of numbers | `[35, 65]` | TThe set of values determining the height of the bars. |
| `colors` | Array of strings | `["#4f46e5", "#f59e0b"]` | HEX/RGB color codes for the slices. |
| `labels` | Array pf strings | `["january", "february"]` | Label names for each data entry. If the labels property is set a legend will appear with the chart, otherwise the chart will be shown with no lgend |
| `width` | Number | `300` | The total width of the SVG container (in pixels). |
| `height` | Number | `200` | The total height of the SVG container (in pixels). |
| `maxValue` | Number | `100` | Maximum posible value on y axis |
| `yInterval` | Number | `0` | The interval at wich y axis is graduated. If this property is set the y axis will be displayed with grades |

**Usage example:**
```JavaScript
<BarChart
    data={[20, 30, 15, 40]}
    colors={["#4f46e5", "#22cddd", "#218143", "#f48428"]}
    maxValue={50}
    yInterval={10}
    labels={["january", "february", "March", "April"]}
/>
```
### 3. `<ClusterBarChart/>`
A complex chart that groups multiple data sets on the same axis, excellent for comparing several categories simultaneously.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | Array of Array of numbers | `[[20, 50], [30, 45]]` | TThe set of values determining the height of the bars. |
| `colors` | Array of strings | `["#4f46e5", "#f59e0b"]` | HEX/RGB color codes for the slices. |
| `labels` | Array pf strings | `["january", "february"]` | Label names for each data entry. If the labels property is set a legend will appear with the chart, otherwise the chart will be shown with no lgend |
| `width` | Number | `300` | The total width of the SVG container (in pixels). |
| `height` | Number | `200` | The total height of the SVG container (in pixels). |
| `maxValue` | Number | `100` | Maximum posible value on y axis |
| `yInterval` | Number | `0` | The interval at wich y axis is graduated. If this property is set the y axis will be displayed with grades |

**Usage example:**
```JavaScript
<ClusterBarChart
    data={[[20, 30, 15, 40], [15, 20, 17, 34], [35, 18, 26, 4]]}
    colors={["#4f46e5", "#22cddd", "#218143", "#f48428"]}
    maxValue={50}
    width={500}
    height={400}
    labels={["january", "february", "March", "April"]}
/>
```
# Demo
Paste the next code inside your react App.js and see how chart components can be used
```JavaScript
import './App.css';
import {BarChart, ClusterBarChart, PieChart} from "chartcomponent-io";

function App() {
  return (
    <div className="App">
      <BarChart
          data={[20, 30, 15, 40]}
          colors={["#4f46e5", "#22cddd", "#218143", "#f48428"]}
          maxValue={50}
          yInterval={10}
          width={350}
          height={300}
          labels={["january", "february", "March", "April"]}
      />
      <PieChart
        data={[20, 30, 40]}
        colors={["#4f46e5", "#22cddd", "#218143"]}
        labels={["january", "february", "March"]}
        width={300}
        height={300}
      />
      <ClusterBarChart
          data={[[20, 30, 15, 40], [15, 20, 17, 34], [35, 18, 26, 4]]}
          colors={["#4f46e5", "#22cddd", "#218143", "#f48428"]}
          maxValue={50}
          width={350}
          height={300}
          labels={["january", "february", "March", "April"]}
      />
    </div>
  );
}

export default App;
```


<img width="1016" height="352" alt="chartcomponent-demo" src="https://github.com/user-attachments/assets/ba036e4a-683c-49d6-adfa-ed88ee9f4c8b" />




