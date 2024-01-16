import React from 'react';
import styles from './ParamEditor.module.css';

export interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: { [paramId: number]: string };
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const initialParamValues: { [paramId: number]: string } = {};
    props.model.paramValues.forEach((paramValue) => {
      initialParamValues[paramValue.paramId] = paramValue.value;
    });

    this.state = {
      paramValues: initialParamValues,
    };
  }

  private handleParamChange = (paramId: number, value: string) => {
    this.setState((prevState) => ({
      paramValues: {
        ...prevState.paramValues,
        [paramId]: value,
      },
    }));
  };

  public getModel(): Model {
    const { paramValues } = this.state;

    const model: Model = {
      paramValues: Object.keys(paramValues).map((paramId) => ({
        paramId: Number(paramId),
        value: paramValues[Number(paramId)],
      })),
    };

    return model;
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.params.map((param) => (
          <div key={param.id} className={styles.item}>
            <label>{param.name}:</label>
            <input
              type="text"
              value={this.state.paramValues[param.id] || ''}
              onChange={(e) => this.handleParamChange(param.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ParamEditor;