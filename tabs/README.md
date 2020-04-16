
# Tabs

Simple Tabs component

## Usage

### API

1. *Tabs*

| Properties  | Description         | Required |
|-------------|---------------------|----------|
| activeTab   | Default active Tab  | False    |


2. *TabPane*

| Properties  | Description         | Required |
|-------------|---------------------|----------|
| tab         | Name of Tab         | True     |

### Code

```javascript
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Tabs activeTab={"Tab2"}>
            <TabPane tab="Tab1">
                Hello this is Tab1
            </TabPane>
            <TabPane tab="Tab2">
                Hello this is Tab2
            </TabPane>
            <TabPane tab="Tab3">
                Hello this is Tab3
            </TabPane>
        </Tabs>);
    }
};
```

