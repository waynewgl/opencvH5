#include <emscripten/bind.h>
#include <opencv2/opencv.hpp>
#include <opencv2/core.hpp>
#include <opencv2/imgproc.hpp>
#include <opencv2/imgproc/imgproc.hpp>
#include <opencv2/photo.hpp>
#include <iostream>
#include <math.h>
#include <string.h>

using namespace std;
using namespace cv;
using namespace emscripten;

typedef std::vector<double> Corner;
typedef std::vector<Corner> Rectangle;
typedef std::vector<cv::Point> CuPoint;//not used, didn't work when used in the js.

string currentCvVersion() {
    return CV_VERSION;
} 


//multipleTemplateMatching.cpp - original, not used
 std::vector<cv::Point>  multipleTemplateMatching(Mat ROIpicture, Mat templateToMatch)
{
    /// Source image to display
    Mat img_display;
    ROIpicture.copyTo( img_display );

    /// Create the result matrix
    int result_cols = ROIpicture.cols - templateToMatch.cols + 1;
    int result_rows = ROIpicture.rows - templateToMatch.rows + 1;

    Mat result = Mat(result_rows, result_cols, CV_32FC1);

    // Possible match methods : TM_CCORR; TM_CCORR_NORMED; TM_CCOEFF; TM_CCOEFF_NORMED; TM_SQDIFF; TM_SQDIFF_NORMED
    int match_method = TM_CCOEFF_NORMED;
    /// Do one matching first
    matchTemplate( ROIpicture, templateToMatch, result, match_method );
    cv::threshold(result, result, 0.88, 1., THRESH_TOZERO);

    /// Localizing the best match with minMaxLoc
    cv::Point minLoc; cv::Point maxLoc;
     std::vector<cv::Point>  matchLoc;
    
    // Detect multiple objects
    while(true)
    {
        double minval, maxval, threshold = 0.88;
        cv::Point minloc, maxloc;
        cv::minMaxLoc(result, &minval, &maxval, &minloc, &maxloc);
        
        if (maxval >= threshold)
        {
            matchLoc.push_back(maxloc);
            cv::floodFill(result, maxloc, cv::Scalar(0), 0, cv::Scalar(.1), cv::Scalar(1.));
        }
        else
            break;
    }

    /// Show the matches
    //rectangle( img_display, matchLoc, Point( matchLoc.x + templ.cols , matchLoc.y + templ.rows ), Scalar::all(0), 2, 8, 0 );
    //rectangle( result, matchLoc, Point( matchLoc.x + templ.cols , matchLoc.y + templ.rows ), Scalar::all(0), 2, 8, 0 );

    // Return all the matching locations

    
    return matchLoc;
}

emscripten::val createTemplate(int templateSize, bool reverseOrder)
{
    Mat createdTemplate;
    if (reverseOrder)
    {
        createdTemplate = Mat(templateSize, templateSize, CV_8U, Scalar(255)); // white square matrix
        // draw black pixels
        for (int i=0;i<templateSize/2;i++)
        {
            for (int j=0;j<templateSize/2;j++)
            {
                createdTemplate.at<uchar>(0 + j, 0 + i) = 0;
            }
        }
        for (int i=0;i<templateSize/2;i++)
        {
            for (int j=0;j<templateSize/2;j++)
            {
                createdTemplate.at<uchar>(templateSize/2 + j, templateSize/2 + i) = 0;
            }
        }
    }
    else
    {
        createdTemplate = Mat(templateSize, templateSize, CV_8U, Scalar(0)); // black square matrix
        // draw white pixels
        for (int i=0;i<templateSize/2;i++)
        {
            for (int j=0;j<templateSize/2;j++)
            {
                createdTemplate.at<uchar>(0 + j, 0 + i) = 255;
            }
        }
        for (int i=0;i<templateSize/2;i++)
        {
            for (int j=0;j<templateSize/2;j++)
            {
                createdTemplate.at<uchar>(templateSize/2 + j, templateSize/2 + i) = 255;
            }
        }
    }
    

    //std::cout << "createdTemplate == !!! " <<  createdTemplate << std::endl; 

    val result = val(emscripten::memory_view<uint8_t>((createdTemplate.total()*createdTemplate.elemSize())/sizeof(uint8_t), (uint8_t *)createdTemplate.data));

    createdTemplate.release();

    return result;
}

Rectangle convertToRectanglePoint(vector<Point> points) {
    Rectangle defaultRect;

    for(int i=0;i<points.size();i++) {
        Corner a;
        a.push_back(points[i].x);
        a.push_back(points[i].y);
        defaultRect.push_back(a);
    }

    return defaultRect;
}

//multipleTemplateMatching for wasm compile
Rectangle  multipleTemplateMatchingTest(const int & roiPictureTmp, const int & templateMatchTmp,  int pictureSize, int templateSize)
{
    /// Source image to display

    uint8_t * Roidata = reinterpret_cast<uint8_t *>(roiPictureTmp);
    Mat ROIpicture(pictureSize, pictureSize, CV_8U, Roidata);

    //std::cout << "ROIpicture == " <<  ROIpicture << std::endl; 

    uint8_t * templatedata = reinterpret_cast<uint8_t *>(templateMatchTmp);
    Mat templateToMatch(templateSize, templateSize, CV_8U, templatedata);

    //std::cout << "templateToMatch == " <<  templateToMatch << std::endl; 

    Mat img_display;
    ROIpicture.copyTo( img_display);

    /// Create the result matrix
    int result_cols = ROIpicture.cols - templateToMatch.cols + 1;
    int result_rows = ROIpicture.rows - templateToMatch.rows + 1;

    Mat result = Mat(result_rows, result_cols, CV_32FC1);

    // Possible match methods : TM_CCORR; TM_CCORR_NORMED; TM_CCOEFF; TM_CCOEFF_NORMED; TM_SQDIFF; TM_SQDIFF_NORMED
    int match_method = TM_CCOEFF_NORMED;
    /// Do one matching first
    matchTemplate( ROIpicture, templateToMatch, result, match_method );
    cv::threshold(result, result, 0.88, 1., THRESH_TOZERO);

    /// Localizing the best match with minMaxLoc
    cv::Point minLoc; cv::Point maxLoc;
    std::vector<cv::Point>  matchLoc;
    
    // Detect multiple objects
    while(true)
    {
        double minval, maxval, threshold = 0.88;
        cv::Point minloc, maxloc;
        cv::minMaxLoc(result, &minval, &maxval, &minloc, &maxloc);
        
        if (maxval >= threshold)
        {
            matchLoc.push_back(maxloc);
            cv::floodFill(result, maxloc, cv::Scalar(0), 0, cv::Scalar(.1), cv::Scalar(1.));
        }
        else
            break;
    }

    /// Show the matches
    //rectangle( img_display, matchLoc, Point( matchLoc.x + templ.cols , matchLoc.y + templ.rows ), Scalar::all(0), 2, 8, 0 );
    //rectangle( result, matchLoc, Point( matchLoc.x + templ.cols , matchLoc.y + templ.rows ), Scalar::all(0), 2, 8, 0 );

    // Return all the matching locations
    //std::cout << "matchLoc" <<  matchLoc << std::endl; 
    return convertToRectanglePoint(matchLoc);
}

//test
string createTemplateTest(int templateSize, bool reverseOrder) {

    Mat mtmp = Mat(templateSize, templateSize, CV_8UC3, Scalar(255)); // white square matrix
    // std::cout << "cout from main" <<  mtmp << std::endl; 
    return "test example";
}


EMSCRIPTEN_BINDINGS(my_module) {
  register_vector<Point>("CuPoint");
  register_vector<Rectangle>("Rectangle");
  register_vector<Corner>("Corner");
  register_vector<double>("value");
  register_vector<int>("VectorInt");
  emscripten::function("currentCvVersion", &currentCvVersion, allow_raw_pointers());
  emscripten::function("createTemplate", &createTemplate, allow_raw_pointers());
  emscripten::function("multipleTemplateMatching", &multipleTemplateMatching, allow_raw_pointers());
  emscripten::function("multipleTemplateMatchingTest", &multipleTemplateMatchingTest, allow_raw_pointers());
  emscripten::function("createTemplateTest", &createTemplateTest, allow_raw_pointers());
}
