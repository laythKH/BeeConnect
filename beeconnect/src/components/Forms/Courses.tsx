import {
  addCoursesRequest,
  deleteCoursesRequest,
  editCoursesRequest,
} from '@/pages/api/profile_api'
import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Courses = (props: any) => {
  const { t } = useTranslation('common')
  const [course, setCourse] = useState({
    courseName: '',
    courseNumber: '',
    id: 0,
  })

  if (course.courseName == '') setCourse(props.course)
  const handleChange = (event: any) => {
    const { name, value } = event.target
    setCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const updateCourses = (event: any) => {
    const token = localStorage.getItem('jwt')
    event.preventDefault()
    if (!course.courseName || !course.courseNumber) {
      toast(t('fillFields'))
      return
    } else {
      editCoursesRequest(token, course).then((res) => {
        if (res.status == 201 || res.status == 200) {
          toast.success(t('updatedSuccessfully'))
        } else {
          toast.error(t('errorUpdating'))
        }
      })
    }
  }

  const addCourses = (event: any) => {
    const token = localStorage.getItem('jwt')
    event.preventDefault()
    if (!course.courseName || !course.courseNumber) {
      toast(t('fillFields'))
      return
    } else {
      addCoursesRequest(token, course).then((res) => {
        if (res.status == 201 || res.status == 200) {
          toast.success(t('addedSuccessfully'))
        } else {
          toast.error(t('errorAdding'))
        }
      })
    }
  }

  const deleteCourses = (event: any) => {
    const token = localStorage.getItem('jwt')
    event.preventDefault()
    if (props.isNew) {
      props.deleteCourse(props.course.id)
    } else {
      deleteCoursesRequest(token, course.id).then((res) => {
        if (res.status == 201 || res.status == 200) {
          toast.success(t('deletedSuccessfully'))
          props.deleteCourse(props.course.id)
        } else {
          toast.error(t('errorDeleting'))
        }
      })
    }
  }
  const deleteItem = () => {
    props.deleteCourse(props.course.id)
  }

  return (
    <Box
      minWidth={'60vw'}
      borderWidth="1px"
      borderRadius={25}
      p={8}
      width="auto"
      mt={30}
    >
      <Stack direction={'row'}>
        <p
          style={{
            textAlign: 'left',
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          {t('courses')} {props.index} {props.isNew}
        </p>
        <Spacer />
        {!props.isNew && (
          <Button
            style={{
              boxShadow: '0 5px 17px 0px rgba(0, 100, 500, 0.3)',
              border: '3px solid rgba(255, 255, 255, 0.3)',
            }}
            type="button"
            colorScheme={'blue'}
            borderRadius="100px"
            onClick={updateCourses}
          >
            {t('update')}
          </Button>
        )}
        {props.isNew && (
          <Button
            style={{
              boxShadow: '0 5px 17px 0px rgba(0, 100, 500, 0.3)',
              border: '3px solid rgba(255, 255, 255, 0.3)',
            }}
            type="button"
            colorScheme={'blue'}
            borderRadius="100px"
            onClick={addCourses}
          >
            {t('add')}
          </Button>
        )}
        <Button
          style={{
            boxShadow: '0 5px 17px 0px rgba(0, 100, 500, 0.3)',
            border: '3px solid rgba(255, 255, 255, 0.3)',
          }}
          type="button"
          colorScheme={'red'}
          borderRadius="100px"
          onClick={deleteCourses}
        >
          <DeleteIcon />
        </Button>
      </Stack>
      <FormControl id="courseName">
        <FormLabel htmlFor="courseName">{t('courseName')}</FormLabel>
        <Input
          minWidth={'100%'}
          type="text"
          defaultValue={props.course.courseName}
          name="courseName"
          id="courseName"
          borderRadius="10"
          size="lg"
          mb={5}
          width="auto"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl id="courseNumber">
        <FormLabel htmlFor="courseNumber">{t('courseNumber')}</FormLabel>
        <Input
          minWidth={'100%'}
          type="text"
          defaultValue={props.course.courseNumber}
          name="courseNumber"
          id="courseNumber"
          borderRadius="10"
          size="lg"
          mb={5}
          width="auto"
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  )
}
export default Courses
