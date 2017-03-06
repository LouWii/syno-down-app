/*
Error codes
  100 Unknown error
  101 Invalid parameter
  102 The requested API does not exist
  103 The requested method does not exist
  104 The requested version does not support the functionality
  105 The logged in session does not have permission
  106 Session timeout
  107 Session interrupted by duplicate login
*/

const generateRootQuery = (profile) => {
  let url = profile.url
    if (profile.port && profile.port !== '') {
      url += ':'+profile.port
    } else {
      url += ':5000'
    }
    url += '/webapi'
    return url
}

export function synoLoginQuery(profile) {
  let url = generateRootQuery(profile)
  url += `/auth.cgi?api=SYNO.API.Auth&version=2&method=login&accou
nt=${profile.login}&passwd=${profile.password}&session=DownloadStation&format=cookie`
  return url
}

export function synoDSListQuery(profile) {
  let url = generateRootQuery(profile)
  url += '/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=1&method=list&additional=detail,file,transfer'
  return url
}
