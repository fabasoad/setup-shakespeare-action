#!/usr/bin/env sh

# Validates string to be one of the possible values (emulating enum data type).
# Parameters:
# 1. (Required) Param name to display it correctly in the error message for the
#    users.
# 2. (Required) Param value that will be validated.
# 3. (Required) Possible values for the param value to be valid.
#
# Usage examples:
# check_enum "my-bool-param" "true" "true,false"
# check_enum "my-days-of-week-param" "wed" "mon,tue,wed,thu,fri,sat,sun"
check_enum() {
  case ",${3}," in
    *",${2},"*)
      ;;
    *)
      msg="\"${1}\" parameter is invalid. Possible values: $(echo "${3}" | sed 's/,/, /g')."
      echo "::error title=Invalid parameter::${msg}"
      exit 1
      ;;
  esac
}

# Validates value to be a valid git ref, i.e. a branch, tag or commit SHA.
# Parameters:
# 1. (Required) Param name to display it correctly in the error message for the
#    users.
# 2. (Required) Param value that will be validated.
#
# Usage examples:
# check_git_ref "my-valid-ref-1" "main"
# check_git_ref "my-valid-ref-2" "v1.0.0"
# check_git_ref "my-valid-ref-3" "feat/python-3.15"
# check_git_ref "my-invalid-ref" "main; rm -rf /"
check_git_ref() {
  if ! echo "${2}" | grep -Eq '^[A-Za-z0-9][A-Za-z0-9._/-]*$'; then
    msg="\"${1}\" parameter is invalid. \"${2}\" is not a valid git ref."
    echo "::error title=Invalid parameter::${msg}"
    exit 1
  fi
}

main() {
  input_version="${1}"
  input_force="${2}"

  check_git_ref "version" "${input_version}"
  check_enum "force" "${input_force}" "true,false"
}

main "$@"
