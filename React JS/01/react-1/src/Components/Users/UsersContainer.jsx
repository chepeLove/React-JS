import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../API/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)

        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)

        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default connect(mapStateToProps,{
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setIsFetching
    })(UsersContainer)
