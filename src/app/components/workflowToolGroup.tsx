import * as React from 'react'
import MenuItem from 'material-ui/MenuItem'
import { ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import WorkflowModal, {IWorkflowModal} from './workflowModal'

export interface IWorkflowToolGroup extends React.Props<any> {
  selectedWorkflow?: {
    workflowId: string,
    runId: string
  }
  workflowStatus: string
  openChangeWorkflow(): any
}

export default class WorkflowToolGroup extends React.Component<IWorkflowToolGroup, void> {
  getWorkflowTitle(): string {
    if (this.props.selectedWorkflow) {
      return `Current Workflow: ${this.props.selectedWorkflow.workflowId}`
    } else {
      return 'Current Workflow: None'
    }
  }
  getWorkflowStatus() {
    if (!this.props.selectedWorkflow) return
    const wfStatus = `Status: ${this.props.workflowStatus}`
    return (
      <div>
        <ToolbarTitle text={wfStatus} />
        <ToolbarSeparator />
      </div>
    )

  }

  render() {
    const workflowTitle = this.getWorkflowTitle()
    const workflowStatus = this.getWorkflowStatus()
    return (
      <ToolbarGroup>
        <ToolbarTitle text={workflowTitle} />
        <ToolbarSeparator />
        {workflowStatus}
        <RaisedButton label="Select Workflow" primary={true} onClick={this.props.openChangeWorkflow} />
        <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText='Terminate' />
          </IconMenu>
      </ToolbarGroup>
    )
  }
}
